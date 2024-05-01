import theme from "../constants/theme.js";

export const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.COLORS.gray,
    borderRadius: 14,
    marginBottom: 14,
    paddingHorizontal: 20,
    gap: 4
  },
  content: {
    flex: 3,   
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 14,
    overflow: "hidden",
    // flexShrink: 1
  },
  description: {
  },
  title: {
    fontSize: theme.FONT_SIZE.md,
    fontWeight: "bold"
  },
  text: {
    color: theme.COLORS.dark_gray,
    fontSize: theme.FONT_SIZE.sm,
  },
  total: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "flex-end"
  },
  valor: {
    fontSize: theme.FONT_SIZE.md,
    fontWeight: "bold",
  },
  real: {
    fontSize: theme.FONT_SIZE.md,
  },
  icon: {   
    width: 50,
    height: 50
  }
}