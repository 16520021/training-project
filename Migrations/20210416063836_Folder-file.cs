using Microsoft.EntityFrameworkCore.Migrations;

namespace training_project.Migrations
{
    public partial class Folderfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Folders",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    folderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    parentID = table.Column<int>(type: "int", nullable: true),
                    owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createAt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    modifedAt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    modifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Folders", x => x.id);
                    table.ForeignKey(
                        name: "FK_Folders_Folders_parentID",
                        column: x => x.parentID,
                        principalTable: "Folders",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    folderid = table.Column<int>(type: "int", nullable: true),
                    owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createAt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    modifedAt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    modifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.id);
                    table.ForeignKey(
                        name: "FK_Files_Folders_folderid",
                        column: x => x.folderid,
                        principalTable: "Folders",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Files_folderid",
                table: "Files",
                column: "folderid");

            migrationBuilder.CreateIndex(
                name: "IX_Folders_parentID",
                table: "Folders",
                column: "parentID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Files");

            migrationBuilder.DropTable(
                name: "Folders");
        }
    }
}
