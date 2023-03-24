    CREATE TABLE clients (
      id_client INT UNSIGNED AUTO_INCREMENT,
      name VARCHAR(45) DEFAULT NULL,
      code_client VARCHAR(200),
      PRIMARY KEY (id_client),
      KEY (id_client)
    );

    CREATE TABLE bedrooms (
      id_room INT UNSIGNED AUTO_INCREMENT,
      type_room ENUM('Individual', 'Doble', 'Suite'),
      description VARCHAR(200),
      price_night DECIMAL(10,2),
      available BOOL,
      PRIMARY KEY (id_room),
      KEY (id_room) 
    );

    CREATE TABLE bookings (
      id_booking INT UNSIGNED AUTO_INCREMENT,
      bedroom_id INT UNSIGNED,
      client_id INT UNSIGNED,
      arrival_date DATE,
      departure_date DATE,
      total_price DECIMAL(10,2),
      total_paid DECIMAL(10,2),
      state_booking ENUM('Pendiente', 'Pagado', 'Eliminado'),
      FOREIGN KEY (bedroom_id) REFERENCES bedrooms(id_room),
      FOREIGN KEY (client_id) REFERENCES clients(id_client),
      PRIMARY KEY (id_booking),
      KEY (id_booking)
    );


    INSERT INTO clients (id_client, name, code_client)
	    VALUES (1,'Carlos Mogro', 'FDD634'),
			       (2,'Marcos Antelo', 'HUD723'),
			       (3,'Daniela Sanchez', 'JGD783');
            
    INSERT INTO bedrooms (id_room,type_room,description,price_night,available)
	    VALUES (1,'Individual', 'Habitacion individual con cama individual y baño privado', 50.00, TRUE),
		         (2,'Doble', 'Habitacion doble con dos camas individuales y baño privado', 75.00, TRUE),
		         (3,'Suite', 'Suite con cama king size, baño privado y balcón con vistas al mar', 150.00, FALSE);

