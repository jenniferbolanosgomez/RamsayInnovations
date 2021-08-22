using BackStudents.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackStudents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private readonly ApplicationDBContexts _context;
        public StudentController(ApplicationDBContexts contexts)
        {
            _context = contexts;

        }


        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<List<Student>> Get()
        {
            try
            {
                var lstStudent = _context.Student.ToList();
                return Ok(lstStudent);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<Student> Get(int id)
        {
            try
            {
                var objStudent = _context.Student.Find(id);
                if (objStudent == null)
                {
                    return NotFound();
                }
                return Ok(objStudent);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult Post([FromBody] Student student)
        {
            try
            {
                _context.Add(student);
                _context.SaveChanges();

                return Ok();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Student student)
        {
            try
            {
                if (id != student.Id)
                {
                    return BadRequest();

                }
                _context.Entry(student).State = EntityState.Modified;
                _context.Update(student);
                _context.SaveChanges();

                return Ok();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {

            try
            {
                var student = _context.Student.Find(id);
                if(student == null)
                {
                    return NotFound();

                }
                _context.Remove(student);
                _context.SaveChanges();
                 
                return Ok();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
