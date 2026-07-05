# AstraTrip Database Schema

Using Supabase PostgreSQL.

1. **Users:** id, email, created_at
2. **Trips:** id, user_id, destination, dates, budget, status
3. **Itineraries:** id, trip_id, day, date, summary
4. **Activities:** id, itinerary_id, title, description, time_slot, lat, lng
5. **Hotels:** id, trip_id, name, price, rating
6. **Packing_Lists:** id, trip_id, items
