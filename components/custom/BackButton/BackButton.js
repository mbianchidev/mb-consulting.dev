import { useRouter } from "next/router";
import styles from "./BackButton.module.css";

export default function BackButton({ router, href, name, style }) {
    if (!router) {
        router = useRouter();
    }
    if (!style) {
        style = styles.backButton + " .service__mobile-back-button";
    }
    if (!href) {
        return (
            <button className={style} onClick={() => router.back()}>⬅️ {name ? "back to "+name : "back"} </button>
        );
    } else {
        return (
            <button className={style} onClick={() => router.push(href)}>⬅️ {name ? "back to "+name : "back"} </button>
        );
    }

}