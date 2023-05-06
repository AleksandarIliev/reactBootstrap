import Product from './Product';
import styles from './ProductDetails.module.css'

export default function ProductDetails ({ data }) {
    return (
        <div >
            <ul className={styles['product']}>
                {data.map(x => <li className={styles.liStyle} key={x.id}><Product {...x} /></li>)}
            </ul>
        </div>
    );
}