import {EntityRepository, Repository} from 'typeorm';
import {Connection} from '../entities/Connection';

@EntityRepository(Connection)
class Connectionsrepository extends Repository<Connection>{

};

export {Connectionsrepository};
