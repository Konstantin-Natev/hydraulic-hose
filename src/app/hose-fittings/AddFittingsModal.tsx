"use client";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Grid, Modal, TextField, Typography } from "@mui/material";
import styles from "./add-fittings-modal.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { CustomTextInput } from "@/ui/CustomTextInput/CustomeInputField";
import { addHoseRecord } from "@/app/hoses/action";
import { addHoseFittingsRecord } from "./action";

interface AddFittingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const validationSchema = yup.object({
  fittings_for_model_hose: yup.string().required("Полето е задължително"),
  fittings_size: yup.string().required("Полето е задължително"),
  DN_diameter: yup.number().required("Полето е задължително"),
  initial_price: yup.number().required("Полето е задължително").min(0.01, "Идващата цена трябва да е минимално 1лв"),
  market_price: yup.number().required("Полето е задължително").min(0.01, "Цена на продаване трябва да е минимално 1лв"),
  count_of_fittings: yup.number().required("Полето е задължително").min(1, "Трябва да въведете брой поне 1 чаша за брой"),
});

export const AddFittingsModal = ({ isOpen, onClose }: AddFittingsModalProps) => {
  const router = useRouter();
  const formikHoseFittings = useFormik({
    initialValues: {
      fittings_for_model_hose: "",
      fittings_size: "",
      DN_diameter: 0,
      initial_price: 0,
      market_price: 0,
      count_of_fittings: 0,
    },
    validateOnMount: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    enableReinitialize: true
  });

  const handleSubmit = async () => {
    try {
      if (formikHoseFittings.isValid) {
        await addHoseFittingsRecord(formikHoseFittings.values);
        onClose();
        formikHoseFittings.resetForm();
      }
    } catch (error) {
      console.error("Error submitting fittings record:", error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={styles.modal}>
      <Grid className={styles.modalContainer}>
        <Grid className={styles.closeImage} onClick={onClose}>
          <Image src="/cross.svg" alt="Cancel" width={20} height={20} />
        </Grid>
        <Typography className={styles.modalTitle}>Добавяне на Накрайник</Typography>
        <form onSubmit={formikHoseFittings.handleSubmit}>
          <Grid container justifyContent={"space-between"} className={styles.modalInnerContainer}>
            <Grid item width={"48%"}>
              <CustomTextInput
                label="Чаша за вид маркуч *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.fittings_for_model_hose}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.fittings_for_model_hose &&
                  Boolean(formikHoseFittings.errors.fittings_for_model_hose)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.fittings_for_model_hose &&
                  formikHoseFittings.errors.fittings_for_model_hose
                }
                name={"fittings_for_model_hose"}
                placeholder={"Въведете чаша за вид маркуч"}
                type={"text"}
              />
               <CustomTextInput
                label="Размер на чашата *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.fittings_size}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.fittings_size &&
                  Boolean(formikHoseFittings.errors.fittings_size)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.fittings_size &&
                  formikHoseFittings.errors.fittings_size
                }
                name={"fittings_size"}
                placeholder={"Въведете размер на чашата"}
                type={"text"}
              />
              <CustomTextInput
                label="Вътрешен диаметър DN *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.DN_diameter}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.DN_diameter &&
                  Boolean(formikHoseFittings.errors.DN_diameter)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.DN_diameter &&
                  formikHoseFittings.errors.DN_diameter
                }
                name={"DN_diameter"}
                placeholder={"Въведете вътрешен диаметър DN"}
                type={"text"}
              />
            </Grid>
            <Grid item width={"48%"}>
              <CustomTextInput
                label="Брой *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.count_of_fittings}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.count_of_fittings &&
                  Boolean(formikHoseFittings.errors.count_of_fittings)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.count_of_fittings &&
                  formikHoseFittings.errors.count_of_fittings
                }
                name={"count_of_fittings"}
                placeholder={"Въведете брой"}
                type={"text"}
              />
              <CustomTextInput
                label="Идваща цена *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.initial_price}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.initial_price &&
                  Boolean(formikHoseFittings.errors.initial_price)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.initial_price &&
                  formikHoseFittings.errors.initial_price
                }
                name={"initial_price"}
                placeholder={"Въведете идваща цена"}
                type={"text"}
              />
              <CustomTextInput
                label="Продаваша цена *"
                labelStyle={styles.modalLabel}
                fieldStyle={styles.modalTextField}
                value={formikHoseFittings.values.market_price}
                onChange={(e) => {
                  formikHoseFittings.handleChange(e);
                }}
                error={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.market_price &&
                  Boolean(formikHoseFittings.errors.market_price)
                }
                helperText={
                  formikHoseFittings.validateOnChange &&
                  formikHoseFittings.touched.market_price &&
                  formikHoseFittings.errors.market_price
                }
                name={"market_price"}
                placeholder={"Въведете продаваша цена"}
                type={"text"}
              />
            </Grid>
          </Grid>
          <Grid className={styles.modalButtonSection}>
            <Button className={styles.closeButton} onClick={onClose}>
              Откажи
            </Button>
            <Button type="submit" className={styles.addButton}>
              Добави
            </Button>
          </Grid>
        </form>
      </Grid>
    </Modal>
  );
};
