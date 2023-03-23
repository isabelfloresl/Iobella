using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Iobella.Models;

public partial class IobellaContext : DbContext
{
    public IobellaContext()
    {
    }

    public IobellaContext(DbContextOptions<IobellaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cita> Cita { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-EHFAEB5; DataBase=Iobella;Integrated Security=true;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cita>(entity =>
        {
            entity.HasKey(e => e.IdCita).HasName("PK__AgendarCita__A7F60896D136582A");

            entity.ToTable("AgendarCita");

            entity.Property(e => e.IdCita).HasColumnName("idcita");

            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("telefono");
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Servicio)
               .HasMaxLength(50)
               .IsUnicode(false)
               .HasColumnName("servicio");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
