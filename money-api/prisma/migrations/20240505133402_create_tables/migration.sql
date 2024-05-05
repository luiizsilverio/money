-- CreateTable
CREATE TABLE "categorias" (
    "categoria" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "despesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "despesas_categoria_fkey" FOREIGN KEY ("categoria") REFERENCES "categorias" ("categoria") ON DELETE RESTRICT ON UPDATE CASCADE
);
