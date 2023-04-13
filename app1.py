import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt

from flask import Flask, jsonify


# create engine to postgresSQL database
engine = create_engine('postgresql+psycopg2://postgres:Monday%4010@localhost/bushfires_wa')

# reflect an existing database into a new model
Base = automap_base()
Base.prepare(autoload_with=engine)

# Save references to each table
coords = Base.classes.coords
per_year = Base.classes.per_year
season = Base.classes.season

# Flask Setup
app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/coords2020<br/>"
        f"/api/v1.0/coords2021<br/>"
        f"/api/v1.0/per_year<br/>"
        f"/api/v1.0/season<br/>"
        f"/api/v1.0/"
    )

@app.route("/api/v1.0/coords2021")
def c2021():
    #2) get a coord data
    session = Session(engine)
    results = session.query(coords.coords, coords.year, coords.date, coords.season, coords.district).filter(coords.year == 2021).all()
    session.close()

    #all_names = list(np.ravel(results))

    return jsonify([[v,w,x,y,z] for v,w,x,y,z in results])

@app.route("/api/v1.0/coords2020")
def c2020():
    #2) get a coord data
    session = Session(engine)
    results = session.query(coords.coords, coords.year, coords.date, coords.season, coords.district).filter(coords.year == 2020).all()
    session.close()

    #all_names = list(np.ravel(results))

    return jsonify([[v,w,x,y,z] for v,w,x,y,z in results])

@app.route("/api/v1.0/per_year")
def year():
    #3) get fires per year data
    session = Session(engine)
    results = session.query(per_year.year, per_year.count).all()
    session.close()
    #all_names = list(np.ravel(results))
    #print(all_names)
    return jsonify([[int(x),int(y)] for x,y in results])

@app.route("/api/v1.0/season")
def seas():
    #3) get season data
    session = Session(engine)
    results = session.query(season.season, season.count, season.avg_size).all()
    session.close()

    #all_names = list(np.ravel(results))

    return jsonify([[x,y,z] for x,y,z in results])


if __name__ == '__main__':
    app.run(debug=True)
