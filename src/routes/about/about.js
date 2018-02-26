/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './about.css';
import Dropzone from 'react-dropzone'
import DropzoneComponent from 'react-dropzone-component';
import Gallery from 'react-grid-gallery';
class About extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,

  };
  constructor() {
  super()
  this.state = {
    accepted: [],
    rejected: []
  }
}

   onDrop(files) {
     this.setState({
       files
     });
   }

  render() {


    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="Nombre">
                Nombre:
                <input
                  className={s.input}
                  id="Nombre"
                  type="text"
                  name="Nombre"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="Descripcion">
                Descripcion:
                <input
                  className={s.input}
                  id="Descripcion"
                  type="text"
                  name="Descripcion"
                />
              </label>
            </div>
           <div className={s.formGroup}>
              <label className={s.label} htmlFor="file">
                Foto:
                <section>
        <div className="dropzone">
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p>Arrastra una imagen aqui, o click para seleccionar.</p>
            <p>solo imagenes con extension *.jpeg and *.png</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Imagenes aceptadas</h2>
          <ul>
            {
              this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
          <h2>Archivos rechazados</h2>
          <ul>
            {
              this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
              </label>
            </div>

            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
