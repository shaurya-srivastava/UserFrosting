#!/usr/bin/perl

use strict;
use warnings;

use CGI;
use CGI::Carp qw(fatalsToBrowser);
use Data::Dumper qw(Dumper);

#use Net::OpenSSH::Parallel;

my $query = new CGI;
my $imsi_input = $query->param('imsi_input');
my $msisdn_input = $query->param('msisdn_input');

print "Content-type:text/html\r\n\r\n";
my $imsi_query_ouput = `/usr/share/httpd/pgsql_query.sh imsi $imsi_input`;
my $msisdn_query_ouput = `/usr/share/httpd/pgsql_query.sh msisdn $msisdn_input`;

if((not defined $imsi_input) && (not defined $msisdn_input)){
    die "Please Input either IMSI or MSISDN";
}elsif($imsi_input){
    chomp($imsi_query_ouput);
    if ($imsi_query_ouput eq "(0 rows)"){
        print "No Result!";
    }else{
        print "$imsi_query_ouput";
    }
}elsif($msisdn_input){
    chomp($msisdn_query_ouput);
    if ($msisdn_query_ouput eq "(0 rows)"){
        print "No Result";
    }else{
        print "$msisdn_query_ouput";
    }
}