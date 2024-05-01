import theme from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logo: {
    // width: 100,
    height: 50,
    objectFit: "contain"
  },
  header: {
    width: "100%",
    backgroundColor: theme.COLORS.blue,
    paddingHorizontal: 30,
    paddingVertical: 24,
    borderRadius: 30,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  total: {
    justifyContent: "center"
  },
  title: {
    color: theme.COLORS.white,
    fontSize: theme.FONT_SIZE.xl,
    fontWeight: "bold"
  },
  subtitle: {
    color: theme.COLORS.white,
    fontSize: theme.FONT_SIZE.sm,
  },
  icon: {
    height: 50,
    objectFit: "contain"
  },
  despesas: {
    width: "100%",
  },
  despTitulo: {
    fontSize: theme.FONT_SIZE.lg,
    color: theme.COLORS.dark_gray,
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 8,
  },
  newButton: {
    width: 72,
    height: 72,
    backgroundColor: theme.COLORS.blue,
    borderRadius: 36,
    marginLeft: -36,
    alignItems: "center",
    position: "absolute",
    bottom: 12,
  },
  textMais: {
    color: theme.COLORS.white,
    fontSize: theme.FONT_SIZE.xxl,
    // textAlign: "center",
    marginTop: -10
  }
}
