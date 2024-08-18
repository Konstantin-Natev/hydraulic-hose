import { Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import styles from "./sidebar.module.scss"

export const Sidebar = () => {
    return (
      <Grid className={styles.rootContainer}>

        <Grid container>
          <Image src="/hydraulic-logo.svg" alt="Hydraulic logo" width={175} height={75}/>
        </Grid>

        <Divider className={styles.divider} />

        <Grid>
          <Link href={"/"}>Начало</Link>
        </Grid>

      </Grid>
    )
}