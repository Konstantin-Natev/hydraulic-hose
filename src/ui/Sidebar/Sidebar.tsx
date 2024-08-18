import { Divider, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import styles from "./sidebar.module.scss"

export const Sidebar = () => {
    return (
    <div className={styles.sidebarOpened}>
      <div className={styles.spaceBetweenLines}>
        <div className={styles.nav}>
          {/* <Image src="/pharma.png" alt="Pharma logo" width={50} height={50} /> */}
          <p>pharma works</p>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.nav}>
          {/* <Image src="/home.svg" alt="Home" className={styles.homeIcon} width={24} height={24} /> */}
          <Link href={"/doctor"}>Начало</Link>
        </div>
        <div className={styles.nav}>
          {/* <Image
            src="/create.svg"
            alt="Create"
            className={styles.homeIcon}
            width={24}
            height={24}
          /> */}
          <Link href={"/doctor/create-voucher"}>Създаване</Link>
        </div>
        <div className={styles.nav}>
          {/* <Image src="/list.svg" alt="List" className={styles.homeIcon} width={24} height={24} /> */}
          <Link href={"/doctor/vouchers"}>Ваучери</Link>
        </div>
        <div className={styles.nav}>
          {/* <Image
            src="/microscope.svg"
            alt="Microscope"
            className={styles.homeIcon}
            width={24}
            height={24}
          /> */}
          <Link href={"/doctor/lab-cards"}>Лаборатории</Link>
        </div>
        <div className={styles.nav}>
          {/* <Image src="/doc.svg" alt="Doc" className={styles.homeIcon} width={24} height={24} /> */}
          <Link href={"/doctor/documents"}>Документи</Link>
        </div>
      </div>

      <div>
        <div className={styles.infoSection}>
          <p>
            <b>Връзка с нас</b>
          </p>
          <div className={styles.info}>
            <Image src="/phone.svg" alt="Phone" width={24} height={24} />
            <p> 0800 19 881</p>
          </div>
          <div className={styles.info}>
            <Image src="/post.svg" alt="Email" width={24} height={24} />
            <p> support-lab@evms.bg</p>
          </div>
        </div>

        <Divider className={styles.divider} />
        <div className={styles.info}>
          <Link href={"/doctor/profile"}>
            <Grid container className={styles.info}>
              {/* <Image
                src="/user.svg"
                alt="User"
                className={styles.homeIcon}
                width={24}
                height={24}
              /> */}
            </Grid>
          </Link>
        </div>

        <Divider className={styles.divider} />
        <button
        //   onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className={styles.signOut}
        >
          {/* <Image
            src="/logout.svg"
            alt="LogOut"
            className={styles.homeIcon}
            width={24}
            height={24}
          /> */}
          <p>Изход</p>
        </button>
      </div>
    </div>
    )
}