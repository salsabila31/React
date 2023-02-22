import { useState } from 'react';

function tentang() {

  const [count, setCount] = useState(0);

  function tambah() {
    setCount(count+1)
  }

  function kurang() {
    if (count > 0) {
      setCount(count-1)
    }
  }

    return (
      <div className="App">
        <h1>Tentang SMK Revit counter : {count}</h1>
        <p>isi tentang smk revit</p>
        <button type="button" onClick={tambah} className="btn btn-danger">Tambah</button>
        <button type="button" onClick={kurang} className="btn btn-dark">Kurang</button>
      </div>
    );
  }
  
  export default tentang; 