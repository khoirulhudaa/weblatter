import React from 'react';
import '../../assets/style/homepage.css';
import Edaran from '../Edaran/Edaran'
import Lamaran from '../Lamaran/Lamaran'
import Izin from '../Izin/Izin'
import Undangan from '../Undangan/Undangan'
import Pesan from '../Pesan/Pesan';

class All extends React.Component {
  render() {

    return (
      <div>
        <div className="all-wrap" id="all">
          <Edaran />
          <Undangan />
          <Lamaran />
          <Izin />
          <Pesan />
        </div>
      </div>
    )
  }
}

export default All;