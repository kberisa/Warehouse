use master;
go
drop database if exists Warehouse;
go
create database Warehouse;
go
use Warehouse;

create table warehouse(
	Id int not null primary key identity(1,1),
	Name VARCHAR(50) NOT NULL,
	Quantity INT NOT NULL,
	EntryTime DATETIME,
	Available bit,
);

CREATE TABLE Operator(
    Id INT PRIMARY KEY IDENTITY,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL
);


INSERT INTO warehouse (Name, Quantity, EntryTime, Available)
VALUES
    ('Smartphone', 100, '2023-01-01', 'Yes'),
    ('Laptop', 75, '2023-02-15', 'Yes'),
    ('Printer', 50, '2023-03-10', 'Yes'),
    ('Camera', 125, '2023-04-20', 'Yes'),
    ('Headphones', 30, '2023-05-05', 'Yes'),
    ('Tablet', 90, '2023-06-15', 'Yes'),
    ('Keyboard', 60, '2023-07-30', 'Yes'),
    ('Monitor', 40, '2023-08-12', 'Yes'),
    ('External Hard Drive', 110, '2023-09-25', 'Yes'),
    ('Mouse', 80, '2023-10-05', 'Yes'),
    ('NotAvailableItem', 0, '2023-10-10', 'No'); 

INSERT INTO Operator (Email, Password)
VALUES
	('Warehouse1@net.eu', 'Password123');