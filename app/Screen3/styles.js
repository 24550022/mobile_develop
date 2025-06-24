import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // full-screen container
    flexDirection: "column",
    gap: 6,
    paddingVertical: 50, // khoảng trống trên & dưới bằng nhau
    paddingHorizontal: 10, // khoảng 2 bên
    backgroundColor: "#fff",
  },

  /* chung cho ô vuông nhỏ */
  boxChild: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
  },

  /* Row 1 & Row 4: 3 cột đều */
  box1: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },
  box3: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },

  /* Row 2 & 3: 2 cột (1 ô lớn + cột 2 ô nhỏ) */
  box2: {
    flex: 2,
    flexDirection: "row",
    gap: 6,
  },
  box2ChildLarge: {
    flex: 2,
    borderColor: "red",
    borderWidth: 2,
  },
  box2ChildColumn: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
});
export default styles;