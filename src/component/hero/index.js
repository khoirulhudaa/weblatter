import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
        <section class="hero">
            <nav className="nav">
                <div className="nav-wrap">
                    <ul>
                        <li onClick={() => this.props.changeHandler('Edaran')}>Edaran</li>
                        <li onClick={() => this.props.changeHandler('Izin')}>Izin</li>
                        <li onClick={() => this.props.changeHandler('Keterangan')}>Keterangan</li>
                        <li onClick={() => this.props.changeHandler('Lamaran')}>Lamaran</li>
                        <li onClick={() => this.props.changeHandler('Pesan')}>Pesan</li>
                        <li onClick={() => this.props.changeHandler('Undangan')}>Undangan</li>
                    </ul>
                </div>
                <div className="btn-toggle" id="btn-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* <img src="./circle-hero.svg" alt="circle-hero" class="circle-hero" /> */}
            <div class="first-title">
                <h1>Surat Digital</h1>
                <a target="__blank" href="https://api.whatsapp.com/send?phone=+6282244956781&text=Hai admin buruhit :)"><button class="btn-purple">Pesan sekarang <i class="fas fa-play"></i></button></a>
            </div>
        </section>
    );
  }
}
