import Navbar from '../components/navbar'

import Card from '../components/card'
import Form from '../components/form'
import Image from '../components/image'
import { useState } from 'react'
import Cardpel from '../components/cardpel'

const User = () => {

    const [atribut, setAtribut] = useState([

        {
            "nama": "Hardi",
            "alamat": "jl.patimura",
            "nohp": "0812345678",
            "merk": "Mi 13 Pro",
            "problem": "Mati Total"
        }])

    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nohp, setNohp] = useState('')
    const [merk, setMerk] = useState('')
    const [problem, setPro] = useState('')

    const tambahPelanggan = () => {

        setAtribut([...atribut, { "nama": nama, "alamat": alamat, "nohp": nohp, "merk": merk, "problem": problem }])

    }

    return (

        <>
            <Navbar tittle_nav="LUNATIC CELL" nav_reservasi="Klik untuk reservasi" />

            <br></br>
            <Image image="../image/kumpulan.png" />
            <br></br>

            <br></br>
            <h1>Mengapa Harus Service Handphone Disini?</h1>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4"><Card img="../image/jempol.jpg" tittlecard="Pelayanan yang baik" isicard="Dalam layanan kami, kami mengutamakan pelayan yang baik kepada pelanggan agar pelanggan merasa nyaman" /></div>
                    <div className="col-sm-4"><Card img="../image/kurir.jpg" tittlecard="Service Antar Jemput" isicard="Salah satu keunggulan pelayanan kami adalah salah satunya pelayanan antar jemput jika ada sudah melakukan reversasi" /></div>
                    <div className="col-sm-4"><Card img="../image/waktu.jpg" tittlecard="Waktu Service Cepat" isicard="Kami juga mengutamakan ketepatan waktu yang cepat dan juga barang yang berkualitas" /></div>
                </div>
            </div>

            <br></br>

            <h2>Isi Form Ini Untuk Reservasi</h2>
            <br></br>
            <div className="mx-auto" style={{ width: 800 }}>
                <input className="form-control my-3" type="text" placeholder="Nama" aria-label="default input example" value={nama}
                    onChange={(e) => (setNama(e.target.value))} />
                <input className="form-control my-3" type="text" placeholder="Alamat" aria-label="default input example" value={alamat}
                    onChange={(e) => (setAlamat(e.target.value))} />
                <input className="form-control my-3" type="text" placeholder="No. Handphone" aria-label="default input example" value={nohp}
                    onChange={(e) => (setNohp(e.target.value))} />
                <input className="form-control my-3" type="text" placeholder="Merk dan Tipe Handphone" aria-label="default input example" value={merk}
                    onChange={(e) => (setMerk(e.target.value))} />
                <input className="form-control my-3" type="text" placeholder="Problem Handphone" aria-label="default input example" value={problem}
                    onChange={(e) => (setPro(e.target.value))} />

            </div>

            <br></br>

            <div className="mx-auto">
                <button type="button" class="btn btn-primary btn-lg" onClick={tambahPelanggan}>
                    Submit
                </button>
            </div>

            <br></br>

            {/* <div className="container">
      <div className="row">
        <div className="col">
        {atribut.map((attr, idx)=>(
          <Cardpel atribut = {attr} />
        ))}  
        </div>
      </div>
    </div> */}




            <div className="col-sm-4">
                {atribut.map((attr, idx) => (
                    <Cardpel atribut={attr} />
                ))}
            </div>

        </>

    );

}

export default User;