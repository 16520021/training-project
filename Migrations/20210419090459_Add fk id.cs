using Microsoft.EntityFrameworkCore.Migrations;

namespace training_project.Migrations
{
    public partial class Addfkid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "icon",
                table: "Folders");

            migrationBuilder.DropColumn(
                name: "icon",
                table: "Files");

            migrationBuilder.AddColumn<int>(
                name: "parent",
                table: "Files",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "parent",
                table: "Files");

            migrationBuilder.AddColumn<string>(
                name: "icon",
                table: "Folders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "icon",
                table: "Files",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
