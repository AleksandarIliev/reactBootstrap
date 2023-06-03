import Product from './Product';
import styles from './AllProducts.module.css';

export default function AllProducts({ data, pathname }) {
    return (
        <div>
            {pathname === "/allProducts" ? (
                <>
                <h5 className={styles['title']}>Here you can see the full list of products developed by us:</h5>
                <ul className={styles['product']}> {data.map(x => <li className={styles.liStyle} key={x.id}><Product {...x} /></li>)}</ul>
                <h5 className={styles['title']}>... and we won't stop there.</h5>
                </>
            ) : (
                <ul className={styles['product']}>
                    {data.map(x => <li className={styles.liStyle} key={x.id}><Product {...x} /></li>)}
                </ul>
            )}
        </div>
    );
}