using BackStudents.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BackStudents
{
    public class ApplicationDBContexts: DbContext
    {
        public DbSet<Student> Student { get; set; }

        public ApplicationDBContexts() { 
        }

        public ApplicationDBContexts(DbContextOptions options): base (options) { }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=Students;Uid=root");
            }
        

        }

    }
}
