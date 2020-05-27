export class Advert {
  id: number | null;
  title: string;
  price: number;
  location: string;
  advertType: string;
  agentId: number;
  heating: string | null;
  numberOfRooms: string | null;
  totalFloor: number | null;
  placeFloor: number | null;
  isInHousingEstate: boolean | null;
  isFurnished: boolean | null;
  isInUse: boolean | null;
}
