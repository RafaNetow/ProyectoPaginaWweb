﻿using DomainDrivenDatabaseDeployer;
using NHibernate;
using PrediLiga.Domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    public class LeagueSeeder : IDataSeeder
    {
        readonly ISession _session;

        public LeagueSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            var ligaBbva = new Leagues
            {
                Name = "Liga BBVA"
            };

            _session.Save(ligaBbva);

            var ligaPremier = new Leagues
            {
                Name = "Liga Premier Inglesa"
            };

            _session.Save(ligaPremier);

            var ligaItaliana = new Leagues
            {
                Name = "Seria A"
            };

            _session.Save(ligaItaliana);
        }
    }
}