import theme from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  containerField: {
    marginBottom: 40,    
  },
  inputLabel: {
    fontSize: theme.FONT_SIZE.xs,
    color: theme.COLORS.medium_gray
  },
  inputValor: {
    fontSize: theme.FONT_SIZE.xl,
    borderBottomColor: theme.COLORS.gray,
    borderBottomWidth: 2,
    padding: 5,
    fontWeight: "bold"
  },
  inputText: {
    fontSize: theme.FONT_SIZE.md,
    borderBottomColor: theme.COLORS.gray,
    borderBottomWidth: 2,
    padding: 5,
  },
  inputPicker: {
    fontSize: theme.FONT_SIZE.md,
    borderBottomColor: theme.COLORS.gray,
    borderBottomWidth: 2,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    // backgroundColor: "gray"
  },
  btnSalvar: {
    width: 150,
    height: 55,
    backgroundColor: theme.COLORS.blue,
    borderRadius: 9,
    justifyContent: "center",
  },
  btnTexto: {
    color: theme.COLORS.white,
    fontSize: theme.FONT_SIZE.lg,
    textAlign: "center"
  },
  btnExcluir: {
    // width: 54,
    // height: 54
  }
}
