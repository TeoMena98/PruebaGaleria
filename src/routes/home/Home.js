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
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Inicio</h1>
      <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis. Fermentum et sollicitudin ac orci. Nam at lectus urna duis convallis. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Hac habitasse platea dictumst quisque. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Sed sed risus pretium quam vulputate dignissim suspendisse. Massa tincidunt dui ut ornare lectus sit amet. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Libero volutpat sed cras ornare arcu. Neque vitae tempus quam pellentesque. Tellus orci ac auctor augue mauris augue neque gravida in.
<br/>
<br/>
Turpis nunc eget lorem dolor sed. Dignissim suspendisse in est ante in nibh. Mattis aliquam faucibus purus in. Elementum sagittis vitae et leo duis ut diam quam nulla. In hendrerit gravida rutrum quisque non. Varius duis at consectetur lorem donec massa sapien faucibus et. Lobortis elementum nibh tellus molestie nunc. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Pharetra diam sit amet nisl. Mollis nunc sed id semper risus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat.
<br/>
<br/>

Fermentum et sollicitudin ac orci. Vestibulum mattis ullamcorper velit sed ullamcorper. Rhoncus mattis rhoncus urna neque viverra justo. Integer quis auctor elit sed vulputate mi sit. Elementum pulvinar etiam non quam lacus suspendisse. Purus non enim praesent elementum facilisis. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Sapien faucibus et molestie ac feugiat. Non enim praesent elementum facilisis leo. Morbi blandit cursus risus at ultrices mi. Commodo viverra maecenas accumsan lacus. Et tortor at risus viverra adipiscing at in. Mauris in aliquam sem fringilla. Natoque penatibus et magnis dis parturient montes. Ornare aenean euismod elementum nisi quis eleifend quam. Velit scelerisque in dictum non consectetur.</article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
