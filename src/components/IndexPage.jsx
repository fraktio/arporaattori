import React from 'react';
import styles from './IndexPage.pcss';
import cx from 'classNames';

class IndexPage extends React.Component {

  do() {
    const { doArpo } = this.props;
    doArpo();
  }

  render() {

    const { seats, arpo } = this.props;

    return (
      <section className={styles.root}>

        <p>
          <button onClick={this.do.bind(this)}>ARPO</button>
        </p>

        <table>
          <tbody>

            {seats.groupBy(seat => seat.row).map((seats, rowNum) => {

              return (
                <tr key={rowNum}>
                  <th className="index">
                    {rowNum}
                  </th>

                  {seats.sortBy(s => s.seat).map(ss => {

                    const isSelected = arpo && (arpo.row === ss.row && arpo.seat === ss.seat);

                    const classes = cx({
                      [styles.selected]: isSelected
                    });

                    return (
                      <td key={ss.seat} className={classes}>{ss.seat}</td>
                    );
                  })}
                </tr>
              );

            })}

          </tbody>
        </table>

      </section>
      );
  }
};

/*
IndexPage.fetch = ({dispatch}) => {
    return dispatch(receiveTodos());
};
*/

export default IndexPage;
