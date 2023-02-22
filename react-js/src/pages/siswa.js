import Listsiswa from "./listsiswa";

function siswa() {
    const nama = ['kana','anna','wawa']

    return (
      <div className="App">
        <Listsiswa judul={nama} />
      </div>
    );
  }
  
  export default siswa;