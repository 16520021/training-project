using Microsoft.EntityFrameworkCore.Migrations;

namespace training_project.Migrations
{
    public partial class addisDeletedcoltoalltable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isDeleted",
                table: "Folders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isDeleted",
                table: "Files",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isDeleted",
                table: "Folders");

            migrationBuilder.DropColumn(
                name: "isDeleted",
                table: "Files");
        }
    }
}
