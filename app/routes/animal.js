var Animal		= require('../models/animal');


module.exports = function(app, express)
{

	var animalRouter = express.Router();

	// On routes that end in /animals
	//-------------------------------------------------------
	animalRouter.route('/animals')
		// create an animal
		.post(function(req, res)
		{
			var animal 		= new Animal();
			animal.type		= req.body.type;
			animal.gender	= req.body.gender;
			animal.weight	= req.body.weight;
			animal.speed	= req.body.speed;

			animal.save(function(err)
			{
				if(err) res.send(err);
				res.json({ message: 'The animal has been created'});
			});
		})
		.get(function(req, res)
		{
			Animal.find(function(err, animals)
			{
				if(err) res.send(err);

				// return the animals
				res.json(animals);
			});
		});

	// On routes that end in /animal id
	//-------------------------------------------------------
	animalRouter.route('/animal/:animal_id')
		// find the animal on the specified animalId
		.get(function(req, res)
		{
			Animal.findById(req.params.animal_id, function(err, animal)
			{
				if(err) res.send(err);

				// Return the animal
				res.json(animal);
			});
		})
		// Update the animal on the specified animalId
		.put(function(req, res)
		{
			Animal.findById(req.params.animal_id, function(err, animal)
			{
				if(err) res.send(err);

				if(req.body.type) animal.type = req.body.type;
				if(req.body.gender) animal.gender = req.body.gender;
				if(req.body.weight) animal.weight = req.body.weight;
				if(req.body.speed) animal.speed = req.body.speed;

				animal.save(function(err)
				{
					if(err) res.send(err);

					// return a message
					res.json({ message: 'The animal has been saved'});
				});
			});
		})
		.delete(function(req, res)
		{
			Animal.remove(
			{
				_id : req.params.animal_id
			},
			function(err, animal)
			{
				if(err) return res.send(err);
				res.json({ message: 'The animal has been deleted'});
			});
		});

		return animalRouter;
}
