import { Point } from "../lezione1";
import styles from './Display.module.scss';

//abbiamo definito un interfaccia per questa props di tipo --> object con un number dentro
//questo componente in ingresso riceve un numero n, e dentro il metodo ci accediamo con props.n
export default function Display(props: { 
    n: number,
    color?: string,
    obj?: Point
}) {
    const { n, color = 'red' } = props;
    // const coloreDaUsare = color ?? 'red';
    //doppia graffa perche andiamo dentro la proprieta di style, il primo color e la proprieta dell'oggetto che passiamo, il secondo e la nostra variabile
    return <div className={styles.display} style={{ color: color }}>{n}</div>;
}