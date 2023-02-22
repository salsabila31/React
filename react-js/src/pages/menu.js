import { useState } from 'react';
import Tabel from "./tabel";

function menu() {
  const title = "Daftar Menu Restoran"
  const[menuu, setMenu]=useState(
    [
      {idmenu:1, idkategori:1, menu:"Anggur", gambar:"anggur.jpg", harga:9000},
      {idmenu:2, idkategori:1, menu:"Jeruk", gambar:"jeruk.jpg", harga:5000},
      {idmenu:3, idkategori:1, menu:"Mangga", gambar:"mangga.jpeg", harga:8000},
      {idmenu:4, idkategori:1, menu:"Semangka", gambar:"615693a118407.jpg", harga:10000},
      {idmenu:5, idkategori:2, menu:"Nasi", gambar:"nasi.jpeg", harga:1500},
      {idmenu:6, idkategori:2, menu:"Sate Ayam", gambar:"sate.jpg", harga:1600},
    ]
  )
    
    return (
      <div className="App">
        <Tabel menu={menuu} title={title} />
        <Tabel menu={menuu.filter((data)=>(data.idkategori===2))} title="Menu Buah" />
      </div>
    );
  }
  
  export default menu;