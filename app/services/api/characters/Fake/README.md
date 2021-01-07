# Fake Characters API
For more information on why this is called a "Fake", please see Martin Fowler's article on Test Doubles.

The fake Servers are for use in early development and during testing.

## Design

Screen (Smart Component) --> State Machine (Redux) --> API (via Saga) --> either a live or fake server.
