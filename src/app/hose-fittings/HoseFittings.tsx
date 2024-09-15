"use client"
import { Autocomplete, Box, Divider, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import styles from "./hose-fittings.module.scss";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { defaultFilters } from "@/interfaces/hose-fittings/hose-fittings";
import { useRouter } from "next/navigation";
import { CustomButton } from "../../ui/CustomButton/CustomButton";
import searchOutline from "../../../public/searchOutline.svg";
import cross from "../../../public/cross.svg";
import plus from "../../../public/plus.svg";
import { AddFittingsModal } from "./AddFittingsModal";
import { IHoseFittingsDetails } from "@/interfaces/hoses/fittings";
import { HoseFittingsTableRow } from "./HoseFittingsTableRow";

interface HoseFittingsProps {
    fittings: IHoseFittingsDetails[]
}

export const HoseFittings = ({ fittings }: HoseFittingsProps) => {
    const [filters, setFilters] = useState({ ...defaultFilters });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const router = useRouter();

    const handleClearFilters = () => {
        setFilters({ ...defaultFilters });
        router.push("?");
    };

    const openAddFittingsModal = () => {
        setIsOpen(true);
    };

    const closeAddFittingsModal = () => {
        setIsOpen(false);
    };

    return (
        <Stack className={styles.rootContainer}>
            <Grid>
                <Grid className={styles.titleSection}>
                    <Typography className={styles.pageTitle}>Накрайници</Typography>
                    <CustomButton
                        text={"Добави накрайник"}
                        variant={"filled"}
                        icon={plus}
                        onClick={openAddFittingsModal}
                    />
                </Grid>
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
                            <TableCell>Чаша за вид маркуч</TableCell>
                            <TableCell>Размер на чашата</TableCell>
                            <TableCell>Вътрешен диаметър DN</TableCell>
                            <TableCell>Брой</TableCell>
                            <TableCell>Идваща цена</TableCell>
                            <TableCell>Продаваща цена</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fittings?.map((hose_fittings: IHoseFittingsDetails) => (
                            <HoseFittingsTableRow key={hose_fittings.id} hose_fittings={hose_fittings} />
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {isOpen && (
                <AddFittingsModal
                    isOpen={isOpen}
                    onClose={closeAddFittingsModal}
                />
            )}
        </Stack>
    )
}