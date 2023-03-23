using Iobella.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Iobella.Models;

namespace Iobella.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendarCitaController : ControllerBase
    {

        private readonly IobellaContext _dbcontext;

        public AgendarCitaController(IobellaContext context)
        {

            _dbcontext = context;

        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {

            List<Cita> lista = await _dbcontext.Cita.OrderByDescending(c => c.IdCita).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Cita request)
        {

            await _dbcontext.Cita.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Cita request)
        {

            _dbcontext.Cita.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {

            Cita Cita = _dbcontext.Cita.Find(id);

            _dbcontext.Cita.Remove(Cita);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}

