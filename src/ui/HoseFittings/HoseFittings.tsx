"use client"
import { Autocomplete, Box, Divider, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import styles from "./hose-fittings.module.scss";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { defaultFilters } from "@/interfaces/hose-fittings/hose-fittings";
import searchOutline from "../../../public/searchOutline.svg";
import cross from "../../../public/cross.svg";
import { useRouter } from "next/navigation";
import { CustomButton } from "../CustomButton/CustomButton";

export const HoseFittings = () => {
    const [filters, setFilters] = useState({ ...defaultFilters });
    const router = useRouter();

    const handleClearFilters = () => {
        setFilters({ ...defaultFilters });
        router.push("?");
    };

    return (
        <Stack className={styles.rootContainer}>
            <Grid>
                <Typography className={styles.pageTitle}>Накрайници</Typography>
                <Typography className={styles.pageSubtitle}>
                    Списък с накрайници въведени в системата и техните размери
                </Typography>
            </Grid>
            <Divider className={styles.divider} />
            <Stack className={styles.filtersSection}>
                <Stack>
                    <Stack className={styles.filters}>
                        <TextField
                            id="outlined-search"
                            placeholder={"Търсете по наимонование на накрайници"}
                            type="search"
                            className={styles.searchField}
                            InputProps={{
                                className: styles.customInput,
                                startAdornment: <Image src={searchOutline} alt={"search outlined"} />
                            }}
                            InputLabelProps={{ className: styles.customInputLabel }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, hose_fittings_name: e.target.value})}
                            value={filters.hose_fittings_name}
                        />
                        <Autocomplete
                            disablePortal
                            id="status-autocomplete"
                            options={[]}
                            className={styles.status}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Статус"
                                InputLabelProps={{ className: styles.customInputLabel }}
                                InputProps={{
                                    ...params.InputProps,
                                    className: styles.customInput
                                }}
                                />
                            )}
                            value={filters.status}
                            onChange={(event, value) => {
                                setFilters({ ...filters, status: value ?? "" });
                            }}
                        />
                    </Stack>
                </Stack>
                <Stack className={styles.filterButtonsInner}>
                    {(filters.hose_fittings_name !== "" ||
                    filters.status !== "" ||
                    filters.count !== "" 
                        ) && (
                        <CustomButton
                            onClick={handleClearFilters}
                            className={styles.clearButton}
                            text={"Изчисти"}
                            icon={cross}
                            variant={"text"}
                        />
                    )}
                </Stack>
            </Stack>
            <Box className={styles.card}>
                <Table>
                    <TableHead>
                        <TableRow className={styles.tableHeader}>
                            <TableCell>ID</TableCell>
                            <TableCell>Бройки</TableCell>
                            <TableCell>Последна поръчка</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {vouchers?.map((voucher) => (
                            <VouchersTableRowDoctor key={voucher.id} voucher={voucher} />
                        ))} */}
                    </TableBody>
                </Table>
            </Box>
        </Stack>
    )
}