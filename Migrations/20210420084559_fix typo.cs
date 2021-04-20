using Microsoft.EntityFrameworkCore.Migrations;

namespace training_project.Migrations
{
    public partial class fixtypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "modifedAt",
                table: "Folders",
                newName: "modifiedAt");

            migrationBuilder.RenameColumn(
                name: "modifedAt",
                table: "Files",
                newName: "modifiedAt");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "modifiedAt",
                table: "Folders",
                newName: "modifedAt");

            migrationBuilder.RenameColumn(
                name: "modifiedAt",
                table: "Files",
                newName: "modifedAt");
        }
    }
}
