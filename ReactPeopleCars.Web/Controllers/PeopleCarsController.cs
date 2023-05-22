using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            var repo = new Repository(_connectionString);
            return repo.GetAllPeople();
        }
        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person p)
        {
            var repo = new Repository(_connectionString);
            repo.AddPerson(p);
        }
        [HttpPost]
        [Route("AddCar")]
        public void AddCar(Car c)
        {
            var repo = new Repository(_connectionString);
            repo.AddCar(c);
        }
        [HttpPost]
        [Route("DeleteCars")]
        public void DeleteCars(int id)
        {
            var repo = new Repository(_connectionString);
            repo.DeleteCars(id);
        }
        [HttpGet]
        [Route("GetCars")]
        public List<Car> GetCars(int id)
        {
            var repo = new Repository(_connectionString);
            return repo.GetCarsByPerson(id);
        }
        [HttpGet]
        [Route("GetPerson")]
        public Person GetPerson(int id)
        {
            var repo = new Repository(_connectionString);
            return repo.GetPerson(id);
        }
    }
}
