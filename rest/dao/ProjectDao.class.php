<?php

class TodoDao{

  private $conn;

  /**
  * constructor of dao class
  */
  public function __construct(){
    $servername = "localhost";
    $username = "root";
    $password = "memduh2PRD";
    $schema = "book_tracking_app";
    $this->conn = new PDO("mysql:host=$servername;dbname=$schema", $username, $password);
    // set the PDO error mode to exception
    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Check connection
    if ($this->conn->connect_error) {
      die("Connection failed!!: " . $conn->connect_error);
    }
    else{
      echo "Connected successfully!!";      
    }
  }

  /**
  * Method used to read all todo objects from database
  */
  public function get_all(){
    $stmt = $this->conn->prepare("SELECT * FROM todos");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  /**
  * Method used to add todo to the database
  */
  public function add($description, $created){
    $stmt = $this->conn->prepare("INSERT INTO todos (description, created) VALUES (:description, :created)");
    $stmt->execute(['description' => $description, 'created' => $created]);
  }

  /**
  * Delete todo record from the database
  */
  public function delete($id){
    $stmt = $this->conn->prepare("DELETE FROM todos WHERE id=:id");
    $stmt->bindParam(':id', $id); // SQL injection prevention
    $stmt->execute();
  }

  /**
  * Update todo record
  */
  public function update($id, $description, $created){
    $stmt = $this->conn->prepare("UPDATE todos SET description=:description, created=:created WHERE id=:id");
    $stmt->execute(['id' => $id, 'description' => $description, 'created' => $created]);
  }

}

?>
