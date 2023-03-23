using System;
using System.Collections.Generic;

namespace Iobella.Models;

public partial class Cita
{
    public int IdCita { get; set; }

    public string? Nombre { get; set; }

    public string? Telefono { get; set; }

    public string? Correo { get; set; }

    public string? Servicio{ get; set; }
}
