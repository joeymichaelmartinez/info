import Link from "next/link";
import styles from './ReturnToHomeScreenButton.module.css';
import useDeviceType from "../deviceType/useDeviceType";

export default function ReturnHomeScreenButton() {
    const devicetype = useDeviceType();
    return (
      <Link href="/HomeScreen" className={styles.returnButton}>
        {devicetype === "mobile" ? "← Back" : "← Return to Home Screen "}
      </Link>
    )
}