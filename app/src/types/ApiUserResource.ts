export default interface ApiUserResource {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  backgroundColor: string | null;
  foregroundColor: string | null;
}
