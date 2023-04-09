import React, { Component } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

import Client from "./Contentful";

const RoomContext = createContext();

export class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,

    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0,
    minSize: 0,
    pets: false,
    breakfast: false,
  };

  // getData from contentfulAPI
  getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: "reactBeachResort",
        order: "fields.name",
      });

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      const maxPrice = Math.max(...rooms.map((room) => room.price));
      const maxSize = Math.max(...rooms.map((room) => room.size));

      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    return items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });

      return { ...item.fields, id, images };
    });
  }

  getRoom = (slug) => {
    return this.state.rooms.find((room) => {
      return slug === room.slug;
    });
  };

  handleOptionChange = (e) => {
    const target = e.target;

    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );

    // const sortedRooms = this.state.sortedRooms.filter(
    //   (item) => item[name] === value
    // );
    // console.log(value);
    // this.setState({ sortedRooms, [name]: value });

    // console.log(`name:${name},  value:${value}`);
  };
  filterRoom = () => {
    let { rooms, type, capacity, price, minSize, maxSize, pets, breakfast } =
      this.state;
    // clone rooms
    let tempRooms = [...rooms];

    // filter tempRooms by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }
    // filter tempRooms by capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((item) => item.capacity === capacity);
    }
    // filter by price
    price = parseInt(price);
    tempRooms = tempRooms.filter((item) => item.price <= price);
    // filter by Size
    tempRooms = tempRooms.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets);
    }

    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleOptionChange: this.handleOptionChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// HOC
export function SingleRoomHOC(Component) {
  return function Wrapper(props) {
    const slug = useParams();
    return <Component {...props} slug={slug} />;
  };
}

export default RoomContext;
