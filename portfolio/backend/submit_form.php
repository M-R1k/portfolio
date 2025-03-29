<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "aymeric"; 
$password = "V12345maj"; 
$dbname = "portfolio_contact_form_db";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    die(json_encode(["success" => false, "message" => "Erreur de connexion : " . $e->getMessage()]));
}


$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Données invalides"]);
    var_dump($data);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO contact_form_submissions (first_name, last_name, company, email, phone_number, message) VALUES (:firstName, :lastName, :company, :email, :phoneNumber, :message)");
    
    $stmt->execute([
        ':firstName' => $data['firstName'] ?? '',
        ':lastName' => $data['lastName'] ?? '',
        ':company' => $data['company'] ?? '',
        ':email' => $data['email'] ?? '',
        ':phoneNumber' => $data['phoneNumber'] ?? '',
        ':message' => $data['message'] ?? ''
    ]);
    
    echo json_encode(["success" => true, "message" => "Message envoyé"]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi"]);
}
