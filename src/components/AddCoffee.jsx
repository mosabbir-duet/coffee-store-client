import React from "react";

const AddCoffee = () => {
  const handleToAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photoUrl.value;

    const coffeeInfo = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(coffeeInfo);
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-5xl text-center font-bold">Add a coffee</h2>
      <form onSubmit={handleToAddCoffee}>
        {/* form row coffee name and available quantity */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text text-lg">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Supplier and  Taste */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text text-lg">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Category and Details */}
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text text-lg">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row photo url */}
        <div className="mb-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Add Coffee */}

        <input
          type="submit"
          name="photo"
          value="Add Coffee"
          className="input input-bordered w-full bg-[#D2B48C] text-xl"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
