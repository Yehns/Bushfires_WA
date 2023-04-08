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
        f"/api/v1.0/coords<br/>"
        f"/api/v1.0/per_year<br/>"
        f"/api/v1.0/season<br/>"
        f"/api/v1.0/"
    )


@app.route("/api/v1.0/coords")
def coord():
    #2) get a coord data
    session = Session(engine)
    results = session.query(coords.coords, coords.year, coords.date, coords.season, coords.district).filter(coords.year >= 1970).all()
    session.close()

    #all_names = list(np.ravel(results))

    return jsonify([[v,w,x,y,z] for v,w,x,y,z in results])

@app.route("/api/v1.0/per_year")
def year():
    #3) get fires per year data
    session = Session(engine)
    results = session.query(per_year.year, per_year.count).all()
    session.close()
    print(results)
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

# @app.route("/api/v1.0/tobs")
# def tobs_yr():
#     #4) tobs for USC00519281 for last year
#     start_point = dt.date(2017, 8, 23) - dt.timedelta(days=365)

#     session = Session(engine)
#     tobs_yr = session.query(measurement.tobs).filter(measurement.station == 'USC00519281').filter(measurement.date >= start_point).all()
#     session.close()

#     results = list(np.ravel(tobs_yr))

#     return jsonify(results)

# @app.route("/api/v1.0/<start>")
# def start_date(start):
#     #5) return the min, avg and max temperature from a variable start date to the end of data
#     session = Session(engine)
#     start_query = session.query(func.min(measurement.tobs), func.avg(measurement.tobs), func.max(measurement.tobs)).filter(measurement.date >= start).all()
#     session.close()

#     results = list(np.ravel(start_query))

#     return jsonify(results)

# @app.route("/api/v1.0/<start>/<end>")
# def start_end_date(start,end):
#     #5) return the min, avg and max temperature from a variable start date to a variable end date
#     session = Session(engine)
#     start_query = session.query(func.min(measurement.tobs), func.avg(measurement.tobs), func.max(measurement.tobs)).filter(measurement.date >= start).filter(measurement.date <= end).all()
#     session.close()

#     results = list(np.ravel(start_query))

#     return jsonify(results)




if __name__ == '__main__':
    app.run(debug=True)
