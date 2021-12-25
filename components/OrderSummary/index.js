import React from "react";
import styles from './style.module.scss';
import Button from "../Button";

const OrderSummary = () => {
    return (
        <div className={styles.orderSummaryCard}>
            <img className={styles.cardHeroImage}
                 src={'/img/illustration-hero.svg'}
                 alt={''}
            />
            <div className={styles.cardBody}>
                <h1 className={styles.title}>
                    Order Summary
                </h1>
                <p className={styles.description}>
                    You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!
                </p>

                <div className={styles.planBox}>
                    <img src={'/img/icon-music.svg'}
                         alt={''}
                    />
                    <div className={styles.planDescriptionContainer}>
                        <h3 className={styles.planNameText}>
                            Annual Plan
                        </h3>
                        <p className={styles.planPriceText}>
                            $59.99/year
                        </p>
                    </div>
                    <button className={styles.changeButton}>
                        Change
                    </button>
                </div>

                <div className={styles.buttonContainer}>
                    <Button>
                        Proceed to Payment
                    </Button>
                    <button className={styles.cancelOrderButton}>
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
