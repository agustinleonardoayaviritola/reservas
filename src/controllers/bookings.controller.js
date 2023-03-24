import { pool } from "../db.js";

// get bookings
export const getBookings = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM bookings");
      res.json({
        message:'successfully',
        bedrooms: rows
      });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

// get beadrooms
export const getBedrooms = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM bedrooms");
      res.json({
        message:'successfully',
        bedrooms: rows
      });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

// get clients
export const getClients = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM clients");
      res.json({
        message:'successfully',
        bedrooms: rows
      });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };


/// post bookings
export const createBooking = async (req, res) => {
    const {bedroom_id, client_id, arrival_date, departure_date, total_price, total_paid, state_booking} = req.body;
    const [data] = await pool.query("SELECT * FROM bedrooms WHERE id_room = ?",[bedroom_id]);
    let price_night = data[0].price_night;
    let t1 = new Date(arrival_date);
    let t2 = new Date(departure_date);
    let difference = t2.getTime() - t1.getTime();
    let daysOfDifference = difference / 1000 / 60 / 60 / 24;
    let total = price_night * daysOfDifference;
    if(total === total_paid) {
        let state = 'Pagado';
        const [rows] = await pool.query(
            "INSERT INTO bookings (bedroom_id, client_id, arrival_date, departure_date, total_price, total_paid, state_booking) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [bedroom_id, client_id, arrival_date, departure_date, total, total_paid, state]
          );
          let id = rows.insertId;
          const [data]  =  await pool.query("SELECT * FROM bookings WHERE id_booking = ?",[id]);
          res.send({
            
            message:'successfully',
            data:data[0],
            bill:{
                name:'agustin',
                code:'1784670',
                total:350,
            }


          })
    }
    else {
        let state = 'Pendiente';
        const [rowss] = await pool.query(
            "INSERT INTO bookings (bedroom_id, client_id, arrival_date, departure_date, total_price, total_paid, state_booking) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [bedroom_id, client_id, arrival_date, departure_date, total, total_paid, state]
          );
          let id = rowss.insertId;
          const [data]  =  await pool.query("SELECT * FROM bookings WHERE id_booking = ?",[id]);
          res.send({
            message:'successfully',
            data:data[0],
          })
    }    
  };


  // patch bookings "put"
  export const deleteBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const state = 'Eliminado';
  
      const [result] = await pool.query(
        "UPDATE bookings SET state_booking = ? WHERE id_booking = ?",
        [state, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Booking not found" });
  
      const [rows] = await pool.query("SELECT * FROM bookings WHERE id_booking = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };





