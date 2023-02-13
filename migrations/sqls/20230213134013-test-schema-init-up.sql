CREATE TABLE test (
    id UUID PRIMARY KEY DEFAULT get_random_uuid(),
    title TEXT NOT NULL
)