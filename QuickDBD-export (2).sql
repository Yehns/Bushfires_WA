-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/1YUncE
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "per_year" (
    "id" int   NOT NULL,
    "year" int   NOT NULL,
    "count" int   NOT NULL,
    CONSTRAINT "pk_per_year" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "season" (
    "id" int   NOT NULL,
    "season" varchar   NOT NULL,
    "count" int   NOT NULL,
    "avg_size" float   NOT NULL,
    CONSTRAINT "pk_season" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "coords" (
    "id" int   NOT NULL,
    "coords" varchar,
    "year" int,
    "date" int,
    "season" varchar,
    "district" varchar,
    CONSTRAINT "pk_coords" PRIMARY KEY (
        "id"
     )
);

